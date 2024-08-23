import React from "react";
import { Outlet, useParams } from "react-router-dom";
import "./Workspace.module.css";

const Workspace = () => {
    const { workspaceId } = useParams();

    return (
        <div className="workspace-container">
            <div className="workspace-header">
                <h2>{workspaceId} Workspace</h2>
            </div>
            <div className="workspace-content">
                <Outlet />
            </div>
        </div>
    );
};

export default Workspace;
