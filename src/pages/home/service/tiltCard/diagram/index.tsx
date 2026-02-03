import React from "react";
import * as S from "./style";
import { ArrowRightIcon } from "@phosphor-icons/react";

type FlowDiagramProps = {
  steps: string[];
};

export default function FlowDiagram({ steps }: FlowDiagramProps) {
  return (
    <S.Container>
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <S.Box>{step}</S.Box>

          {index !== steps.length - 1 && (
            <ArrowRightIcon size={22} />
          )}
        </React.Fragment>
      ))}
    </S.Container>
  );
}
