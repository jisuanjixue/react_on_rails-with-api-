// import * as React from 'react';
// import { Redirect, Route } from "react-router-dom";

// export interface Props {
//   component: () => void,
//   condition: Boolean,
//   path: string,
//   redirectRoute: string,
//   location: object
// }

// const PrivateRoute: React.FunctionComponent<Props> = (
//   props: Props
// ) => {
//     const {condition, redirectRoute, path, component} = props

//     return !condition ? <Redirect
//       to={{
//         pathname: redirectRoute,
//         from: props.location,
//       }}
//     /> : <Route path={path} component={component} {...props} />;
// };

// export default PrivateRoute;