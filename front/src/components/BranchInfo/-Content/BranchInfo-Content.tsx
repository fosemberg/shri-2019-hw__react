import React from 'react';
import BranchInfoContentBase from '../../../patterns/BranchInfo/-Content/BranchInfo-Content';
import Link from '../../../patterns/Link/Link';
import User from '../../../patterns/User/User';

const BranchInfoContent = () => (
  <BranchInfoContentBase>
    {' Last commit '}
    <Link>c4d248</Link>
    {' on '}
    <Link>20 Oct 2017, 12:24</Link>
    {' by '}
    <User>robot-srch-releaser</User>
  </BranchInfoContentBase>
);

export default BranchInfoContent;
