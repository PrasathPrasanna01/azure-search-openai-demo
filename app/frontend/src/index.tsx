import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { initializeIcons } from "@fluentui/react";
import LayoutWrapper from "./layoutWrapper";
import Workspace from "./pages/workspace/Workspace";
import Chat from "./pages/chat/Chat";
import WorkspaceList from "./components/WorkspaceList/WorkspaceList";

import "./index.css";

initializeIcons();

const router = createHashRouter([
    {
        path: "/",
        element: <LayoutWrapper />,
        children: [
            {
                index: true,
                element: <div style={{ display: "flex" }}>
                            <WorkspaceList />
                            <Workspace />
                        </div>
            },
            {
                path: "workspaces/:workspaceId",
                element: <div style={{ display: "flex" }}>
                            <WorkspaceList />
                            <Workspace />
                         </div>,
                children: [
                    {
                        index: true,
                        element: <Chat />
                    },
                    {
                        path: "chat",
                        element: <Chat />
                    }
                ]
            },
            {
                path: "*",
                lazy: () => import("./pages/NoPage")
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
