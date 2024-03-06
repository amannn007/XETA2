import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type VectorListVerticalLinesType = {
  group?: string;
  group1?: string;
  group2?: string;
  group3?: string;

  /** Style props */
  propRight?: CSSProperties["right"];
  propLeft?: CSSProperties["left"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
  propHeight2?: CSSProperties["height"];
};

const VectorListVerticalLines: FunctionComponent<
  VectorListVerticalLinesType
> = ({
  group,
  group1,
  group2,
  group3,
  propRight,
  propLeft,
  propHeight,
  propHeight1,
  propHeight2,
}) => {
  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  const groupIcon1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const groupIcon2Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const frameLoremLoremLoremLoremStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight2,
    };
  }, [propHeight2]);

  return (
    <div className="flex-1 flex flex-col items-end justify-start gap-[7px_0px] min-w-[103px] text-center text-3xs text-black font-xs-regular">
      <div className="self-stretch flex flex-row items-end justify-start gap-[0px_19px]">
        <div className="flex flex-row items-start justify-start relative">
          <img
            className="h-[7px] w-[374px] absolute !m-[0] right-[-313px] bottom-[-4.5px] z-[2]"
            alt=""
            src={group}
            style={groupIconStyle}
          />
          <img
            className="h-[134px] w-10 relative z-[3]"
            alt=""
            src={group1}
            style={groupIcon1Style}
          />
        </div>
        <img className="h-[113.6px] w-10 relative z-[3]" alt="" src={group2} />
        <img
          className="h-[74.4px] w-10 relative z-[3]"
          alt=""
          src={group3}
          style={groupIcon2Style}
        />
      </div>
      <div
        className="flex flex-row items-start justify-start gap-[0px_30px]"
        style={frameLoremLoremLoremLoremStyle}
      >
        <div className="relative z-[2]">Lorem</div>
        <div className="relative z-[2]">Lorem</div>
        <div className="relative z-[2]">Lorem</div>
      </div>
    </div>
  );
};

export default VectorListVerticalLines;
