import * as Tooltip from "@radix-ui/react-tooltip";
import clsx from "clsx";
import React from "react";

type CustomToolTipProps = {
  content: string;
} & React.ComponentPropsWithoutRef<"div">;

const CustomTooltip = ({ children, content }: CustomToolTipProps) => {
  return (
    <Tooltip.Provider delayDuration={800} skipDelayDuration={500}>
      <Tooltip.Root delayDuration={100}>
        <Tooltip.Trigger>{children}</Tooltip.Trigger>
        <Tooltip.Content
          className={clsx(
            "inline-block rounded-md bg-white p-2 text-gray-600 shadow-md dark:bg-dark dark:text-gray-200",
            "border dark:border-gray-600 "
          )}
        >
          {content}
        </Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        {/* 
        <Tooltip.Trigger>…</Tooltip.Trigger>
        <Tooltip.Content>…</Tooltip.Content> */}
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default CustomTooltip;
