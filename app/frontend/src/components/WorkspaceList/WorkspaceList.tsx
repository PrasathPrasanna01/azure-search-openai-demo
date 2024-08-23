import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";  // Importing a delete icon from react-icons
import "./WorkspaceList.css";

const WorkspaceList = () => {
    const [newWorkspaceName, setNewWorkspaceName] = useState("");
    const [workspaces, setWorkspaces] = useState(["Healthcare", "Automobile"]);
    const navigate = useNavigate();

    const handleWorkspaceClick = (workspace: string) => {
        navigate(`/workspaces/${workspace}`);
    };

    const handleCreateWorkspace = () => {
        if (newWorkspaceName.trim() !== "") {
            setWorkspaces([...workspaces, newWorkspaceName.trim()]);
            setNewWorkspaceName("");
        }
    };

    const handleDeleteWorkspace = (workspace: string) => {
        if (window.confirm(`Are you sure you want to delete the workspace "${workspace}"?`)) {
            setWorkspaces(workspaces.filter((ws) => ws !== workspace));
        }
    };

    return (
        <div className="workspace-list">
            <h2>Workspaces</h2>
            {workspaces.map((workspace) => (
                <div key={workspace} className="workspace-item">
                    <div className="workspace-name" onClick={() => handleWorkspaceClick(workspace)}>
                        {workspace}
                    </div>
                    <AiFillDelete
                        className="delete-icon"
                        onClick={() => handleDeleteWorkspace(workspace)}
                        title="Delete workspace"
                    />
                </div>
            ))}
            <input
                type="text"
                placeholder="New workspace name"
                value={newWorkspaceName}
                onChange={(e) => setNewWorkspaceName(e.target.value)}
            />
            <button onClick={handleCreateWorkspace}>Create Workspace</button>
        </div>
    );
};

export default WorkspaceList;
