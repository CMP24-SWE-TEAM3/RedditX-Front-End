import React from 'react';
import NavbarRule from "Features/Moderator/Components/NavbarRule/NavbarRule";
import RuleHeader from "Features/Moderator/Components/RuleHeader/RuleHeader";
import RuleTab from "Features/Moderator/Components/RuleTab/RuleTab";
import RuleModal from "Features/Moderator/Components/RuleModal/RuleModal";

const Rules = () => {
    return (
        <>
            <NavbarRule/>
            <RuleHeader/>
            <RuleTab/>
            <RuleModal/>
        </>
    );
};

export default Rules;
