import { cn } from "@/utils/cn";

export default function DefaultHeadshotSvg(props: {
  className?: string;
}): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="340"
      height="340"
      className={cn("scale-75 fill-blue-200", props.className)}
    >
      <path
        d="m169,.5a169,169 0 1,0 2,0zm0,86a76,76 0 1
1-2,0zM57,287q27-35 67-35h92q40,0 67,35a164,164 0 0,1-226,0"
      />
    </svg>
  );
}
