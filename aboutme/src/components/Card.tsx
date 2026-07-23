export default function Card(props: {
  title: string;
  timeSpent: string;
  caption: string;
  bullets: string[];
  note?: string;
}) {
  const { title, timeSpent, caption, bullets, note } = props;

  return (
    <div className="border border-[var(--terminal-border)] rounded-md bg-[var(--terminal-surface)] p-7">
      <div className="flex justify-between flex-wrap gap-2 items-baseline">
        <h3 className="m-0 text-lg text-[var(--terminal-text-bright)]">
          {title}
          {note && <span className="text-[var(--terminal-text-dim)]">*</span>}
        </h3>
        <span className="text-[13px] text-[var(--terminal-text-dim)]">{timeSpent}</span>
      </div>

      <p className="my-3 text-sm text-[var(--terminal-text-muted)]">{caption}</p>

      <ul className="m-0 pl-5 text-sm text-[var(--terminal-text-body)] space-y-2">
        {bullets.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      {note && (
        <p className="text-xs italic text-[var(--terminal-text-dimmer)] mt-4">{note}</p>
      )}
    </div>
  );
}
