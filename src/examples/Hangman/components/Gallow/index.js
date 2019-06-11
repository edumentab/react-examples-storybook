import React from "react";

const frame0 = `




 ________
/        \\
''''''''''
`;

const frame1 = `

    |
    |
    |
 ___|____
/        \\
''''''''''
`;

const frame2 = `
    .________
    |
    |
    |
 ___|____
/        \\
''''''''''
`;

const frame3 = `
    .________
    |        |
    |        O
    |
 ___|____
/        \\
''''''''''
`;

const frame4 = `
    .________
    |        |
    |       \\O/
    |        |
 ___|____   / \\
/        \\
''''''''''
`;

const frames = [frame0, frame1, frame2, frame3, frame4];

export const Gallow = props => {
  return <pre>{frames[props.nbrOfErrors]}</pre>;
};
