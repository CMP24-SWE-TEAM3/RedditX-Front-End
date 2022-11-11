import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import WidgetContainer from "../WidgetContainer/WidgetContainer";

import {
  Arrow,
  Description,
  Number,
  RuleContainer,
  RuleFex,
  Title,
} from "./RulesWidget.styled";

/**
 * show rules of the community
 *
 * @returns {React.Component} CreatePost component
 */
const RulesWidget = () => {
  //rules
  const rules = [
    { title: "t1", description: "d1" },
    { title: "t2", description: "d2" },
    { title: "t3", description: "" },
  ];

  /**
   *
   * @param {number} index - order of rule
   * @param {number} len - the number of rules
   * @param {string} title - title of rule
   * @param {string} description - description of rule
   * @returns {React.Component} CreatePost component
   */
  const Rule = ({ index, len, title, description }) => {
    //to toggle the dropdown of description
    const [toggle, setToggle] = useState(true);
    //to check if will put description or not
    const desc = description.length === 0 ? false : true;
    //check the last rule so not adding line after it
    const last = index === len ? true : false;

    /**
     * onClick rule handler
     */
    function toggleHandler() {
      setToggle((prev) => !prev);
    }

    return (
      <RuleContainer onClick={toggleHandler} last={last} desc={desc}>
        <RuleFex>
          <Number>{index + "."}</Number>
          <Title>{title}</Title>
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
              <p>{description}</p>
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
            key={rule.title}
            description={rule.description}
          />
        );
      })}
    </WidgetContainer>
  );
};

export default RulesWidget;
