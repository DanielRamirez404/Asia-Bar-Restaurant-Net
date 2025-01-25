import React from "react";
import { AllRoles } from "../session/roles";
import { RestrictedPage } from "../session/permissions";
import { DashboardPageOrder, PagePaths } from "./paths";

import Welcome from "../pages/welcome";
import Login from '../pages/login'

class Page {
    constructor(path, component, title = null, roles = AllRoles) {
        this.path = path;
        this.component = <RestrictedPage page={component} permissions={roles} />;
        this.title = title;
        this.roles = roles;
    }
}

export const PageList = [
    new Page(PagePaths['Welcome'], <Welcome />, "Bienvenida"),
    new Page(PagePaths['Login'], <Login/>,"Login"), 
];

export const DashboardPageList = PageList
    .filter( page => { 
        return DashboardPageOrder.includes(page.path); 
    })
    .sort((firstPage, nextPage) => {
        return DashboardPageOrder.indexOf(firstPage.path) - DashboardPageOrder.indexOf(nextPage.path);
    });

export function GetPathTitle(path) {
    return DashboardPageList.find(page => page.path === path).title;
}