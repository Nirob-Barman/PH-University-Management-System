import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    // key: "1",
    key: "DashBoard",
    // label: "DashBoard",
    label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
  },
  // {
  //   key: "2",
  //   label: "Profile",
  // },
  {
    // key: "3",
    key: "User Management",
    label: "User Management",
    children: [
      {
        // key: "31",
        key: "Create Admin",
        // label: "Create Admin",
        label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
      },
      {
        // key: "32",
        key: "Create Student",
        // label: "Create Student",
        label: <NavLink to="/admin/create-student">Create Student</NavLink>,
      },
      {
        // key: "32",
        key: "Create Faculty",
        // label: "Create Faculty",
        label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
      },
    ],
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            // textAlign: "center",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>PH-Uni</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <h1>PH University Management app</h1>
            <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
