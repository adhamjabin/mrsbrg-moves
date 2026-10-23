-- =====================================================================
-- MRSBRG moves – Speicher für Probetraining-Anfragen
--
-- Einmal komplett im Supabase-Dashboard unter "SQL Editor" ausführen.
-- Darf auch mehrfach ausgeführt werden (bestehende Anfragen bleiben erhalten).
--
-- Sicherheit:
--   * Die Website (Rolle "anon") darf nur NEUE Anfragen eintragen.
--   * Lesen, Ändern und Löschen ist von außen nicht möglich.
--   * Ansehen kannst nur du – eingeloggt im Supabase-Dashboard (Table Editor).
-- =====================================================================

create table if not exists public.probetraining_anfragen (
  id            uuid primary key default gen_random_uuid(),
  erstellt_am   timestamptz not null default now(),
  vorname       text not null check (char_length(btrim(vorname)) between 1 and 60),
  nachname      text not null check (char_length(btrim(nachname)) between 1 and 60),
  email         text not null check (char_length(email) <= 254 and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]{2,}$'),
  telefon       text check (telefon is null or telefon ~ '^[0-9 +()/.-]{6,30}$'),
  wunschtermin  date not null,
  tageszeit     text not null check (tageszeit in ('Vormittag', 'Nachmittag', 'Abend')),
  nachricht     text check (nachricht is null or char_length(nachricht) <= 1000),
  -- Zum Abhaken im Dashboard: neu → bestätigt → erledigt (oder abgesagt)
  status        text not null default 'neu' check (status in ('neu', 'bestätigt', 'erledigt', 'abgesagt'))
);

comment on table public.probetraining_anfragen is 'Anfragen aus dem Probetraining-Formular der Website';

-- Zeilenschutz einschalten: ohne passende Regel ist alles verboten
alter table public.probetraining_anfragen enable row level security;

-- Alle Standardrechte entziehen und nur das Eintragen der Formularfelder erlauben
revoke all on table public.probetraining_anfragen from anon, authenticated;
grant insert (id, vorname, nachname, email, telefon, wunschtermin, tageszeit, nachricht)
  on table public.probetraining_anfragen to anon;

drop policy if exists "Website darf Anfragen eintragen" on public.probetraining_anfragen;
create policy "Website darf Anfragen eintragen"
  on public.probetraining_anfragen
  for insert
  to anon
  with check (
    wunschtermin between current_date and current_date + 90
    and status = 'neu'
  );

-- Schutz vor Spam: max. 3 Anfragen pro E-Mail-Adresse und Tag, max. 30 Anfragen pro Stunde insgesamt
create or replace function public.probetraining_spamschutz()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if (select count(*) from public.probetraining_anfragen
      where lower(email) = lower(new.email) and erstellt_am > now() - interval '1 day') >= 3 then
    raise exception 'Zu viele Anfragen mit dieser E-Mail-Adresse';
  end if;
  if (select count(*) from public.probetraining_anfragen
      where erstellt_am > now() - interval '1 hour') >= 30 then
    raise exception 'Zu viele Anfragen insgesamt';
  end if;
  return new;
end;
$$;

revoke all on function public.probetraining_spamschutz() from public, anon, authenticated;

drop trigger if exists probetraining_spamschutz on public.probetraining_anfragen;
create trigger probetraining_spamschutz
  before insert on public.probetraining_anfragen
  for each row execute function public.probetraining_spamschutz();
