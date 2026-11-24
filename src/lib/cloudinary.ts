/** Transformaciones de Cloudinary (§9): f_auto,q_auto,w_… + srcset 640/1024/1600. */
export const WIDTHS = [640, 1024, 1600] as const;

export function cld(url: string, width: number): string {
  return url.replace('/upload/', `/upload/f_auto,q_auto,w_${width}/`);
}

export function srcset(url: string, widths: readonly number[] = WIDTHS): string {
  return widths.map((w) => `${cld(url, w)} ${w}w`).join(', ');
}
