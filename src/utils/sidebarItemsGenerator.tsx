import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../types";

// import { ReactNode } from "react";

// type TSidebarItem = {
//   key: string;
//   label: ReactNode;
//   children?: TSidebarItem[];
// };

// type TUserPath = {
//   name: string;
//   path?: string;
//   element?: ReactNode;
//   children?: TUserPath[];
// };


export const sidebarItemsGenerator = (items: TUserPath[], role) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        // children: item.children.map((child) => ({
        //   key: child.name,
        //   label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        // })),

        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              label: (
                <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
              ),
            };
          }
        }),
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};