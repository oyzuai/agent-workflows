#!/usr/bin/env bash
# User-level SessionStart hook: independent of cwd and CLAUDE_PROJECT_DIR.
set -u
export GIT_TERMINAL_PROMPT=0
error() {
  printf 'ERROR: %s\n' "$*" >&2
  printf 'ERROR: %s\n' "$*"
}
load_context() {
  if [ -n "${XDG_CACHE_HOME:-}" ]; then
    cache_root="$XDG_CACHE_HOME"
  elif [ -n "${HOME:-}" ]; then
    cache_root="$HOME/.cache"
  else
    return 1
  fi
  case "$cache_root" in /*) ;; *) return 1 ;; esac
  context_dir="$cache_root/oyzu/context"
  mkdir -p -- "$cache_root/oyzu" || return 1
  if [ -e "$context_dir" ]; then
    git -C "$context_dir" rev-parse --is-inside-work-tree >/dev/null 2>&1 || return 1
    [ -z "$(git -C "$context_dir" rev-parse --show-prefix)" ] || return 1
    [ "$(git -C "$context_dir" symbolic-ref --short HEAD)" = main ] || return 1
    case "$(git -C "$context_dir" config --get remote.origin.url 2>/dev/null)" in
      https://github.com/oyzuai/context|https://github.com/oyzuai/context.git|git@github.com:oyzuai/context.git) ;;
      *) return 1 ;;
    esac
    git -C "$context_dir" pull --ff-only origin main >/dev/null 2>&1 || return 1
  else
    git clone --quiet --branch main https://github.com/oyzuai/context.git "$context_dir" >/dev/null 2>&1 || return 1
  fi
  # One committed snapshot binds both printed documents to the reported SHA.
  commit="$(git -C "$context_dir" rev-parse HEAD)" || return 1
  constitution="$(git -C "$context_dir" show "$commit:CONSTITUTION.md" 2>/dev/null)" || return 1
  index="$(git -C "$context_dir" show "$commit:INDEX.md" 2>/dev/null)" || return 1
  printf '%s\n\n%s\n\ncontext commit %s\n' "$constitution" "$index" "$commit"
}
load_context || error 'shared oyzuai/context could not be refreshed or loaded; context load FAILED. Check private repository access and the user cache, then retry before relying on shared context.'
# SessionStart stdout carries the explicit ERROR marker even when offline.
exit 0
