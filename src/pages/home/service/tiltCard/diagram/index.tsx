import React from "react";
import * as S from "./style";
import { ArrowRightIcon } from "@phosphor-icons/react";

const steps = ["usuário", "Loja", "funcionário", "agendamento"];

export default function FlowDiagram() {
  return (
    <S.Container>
      {steps.map((step) => (
        <React.Fragment key={step}>
          <S.Box>{step}</S.Box>
          <ArrowRightIcon size={22} />
        </React.Fragment>
      ))}
    </S.Container>
  );
}
