-- Adds the revisit flag and note columns the app uses (safe to re-run).
alter table public.progress add column if not exists flag boolean not null default false;
alter table public.progress add column if not exists note text;
-- Needed for upsert(onConflict: 'user_id,problem_id'); errors harmlessly if a matching PK/unique already exists.
create unique index if not exists progress_user_problem_key on public.progress (user_id, problem_id);
