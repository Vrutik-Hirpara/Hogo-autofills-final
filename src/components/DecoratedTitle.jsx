import { themes } from "../config/themeConfig";

export default function DecoratedTitle({ text }) {
  return (
    <div className="inline-block">
      <div className="relative inline-block">
 
        {/* Top short line (right shifted) */}
        <span
          className="
            absolute
            -top-3
            right-0
            w-[45%]
            h-[2px]
            bg-[var(--primary)]
          "
        />
 
        {/* Text */}
        <h2 className="tracking-[0.35em] font-semibold" style={{color: themes.textWhite}}>
          {text}
        </h2>
 
        {/* Bottom short line (left shifted) */}
        <span
          className="
            absolute
            -bottom-3
            left-0
            w-[45%]
            h-[2px]
            bg-[var(--primary)]
          "
        />
      </div>
    </div>
  );
}
 
 