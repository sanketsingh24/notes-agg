import DeptPage from "../containers/DeptPage";
import SubjectPage from "../containers/SubjectPage";
import App from "../containers/App";

export default routes = [
    { component: App,
      routes: [
        { path: '/',
          exact: true,
          component: DeptPage
        },
        { path: '/dept/:deptId',
          component: SubjectPage
        }
      ]
    }
  ];
  