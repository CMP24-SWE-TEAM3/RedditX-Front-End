import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import WidgetContainer from "../WidgetContainer/WidgetContainer";

import {
  Arrow,
  Description,
  Number,
  RuleContainer,
  RuleFex,
  Title
} from "./RulesWidget.styled";

const RulesWidget = () => {
  const rules = [
    { title: "t1", description: "d1" },
    { title: "t2", description: "d2" },
    { title: "t3", description: "" },
  ];

  const Rule = (props) => {
    const [toggle, setToggle] = useState(true);
    const desc = props.description.length === 0 ? false : true;
    const last = props.index === props.len ? true : false;
    function toggleHandler() {
      setToggle((prev) => !prev);
    }

    return (
      <RuleContainer onClick={toggleHandler} last={last} desc={desc}>
        <RuleFex>
          <Number>{props.index + "."}</Number>
          <Title>{props.title}</Title>
          <Arrow>
            {desc && toggle && (
              <span className="icon">
                <RiArrowDownSLine />
              </span>
            )}
            {desc && !toggle && (
              <span className="icon">
                <RiArrowUpSLine />
              </span>
            )}
          </Arrow>
        </RuleFex>
        {desc && !toggle && (
          <Description>
            <div>
              <p>{props.description}</p>
            </div>
          </Description>
        )}
      </RuleContainer>
    );
  };

  return (
    <WidgetContainer headerText="r/Eln2aa4yn Rules">
      {rules.map((rule, i) => {
        return (
          <Rule
            index={i + 1}
            len={rules.length}
            title={rule.title}
            description={rule.description}
          />
        );
      })}
    </WidgetContainer>
  );
};

export default RulesWidget;
