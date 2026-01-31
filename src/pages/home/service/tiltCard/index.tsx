import React, { useRef } from "react";
import { useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

import {
  PageWrapper,
  Card,
  CardInner,
  Title,
  Body,
  Container,
  Line,
} from "./style";
import { StarHalfIcon, StarIcon, type IconProps } from "@phosphor-icons/react";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

type IconType = React.ComponentType<IconProps>;
type ActionItem = {
  icon?: IconType;
};
type Props = {
  cardName: string;
  title: string;
  content: string;
  details: string;
  detailStrong: string;
  onClick?: () => void;
  icon?: ActionItem[];
};
export default function CardTilt({
  cardName,
  title,
  content,
  detailStrong,
  icon,
  details,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`
    rotateX(${xSpring}deg) 
    rotateY(${ySpring}deg)
  `;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / rect.height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / rect.width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <PageWrapper>
      <Card
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform }}
      >
        <CardInner>
          <Container>
            <Title>{cardName}</Title>
            <Body>
              <h4>{title}</h4>
              <span>
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQFmWCXjW3bkgw/profile-displayphoto-scale_100_100/B4DZvyMJ2FHYAk-/0/1769294837490?e=1771459200&v=beta&t=ybCKUtYMbx7YzbSMWPVrgUJ-j3yZ-n_1tACqnjf9rv0"></img>
                <div>
                  <p>Lucas Soares Lima</p>
                  <p>
                    <StarIcon size={20}  weight="fill" />
                    <StarIcon size={20} weight="fill" />
                    <StarIcon size={20} weight="fill" />
                    <StarIcon size={20} weight="fill" />
                    <StarHalfIcon size={20} weight="fill" />
                  </p>
                </div>
              </span>
              <p>{content}</p>
              <Line />
              <p>
                {details}
                <strong>{detailStrong}</strong>
                {icon?.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index}>
                      {Icon && <Icon weight="light" size={18} />}
                    </div>
                  );
                })}
              </p>
            </Body>
          </Container>
        </CardInner>
      </Card>
    </PageWrapper>
  );
}
