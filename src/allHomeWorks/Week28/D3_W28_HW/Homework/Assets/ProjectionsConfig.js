
export async function InsertNewProjection(ProjectionName, ProjectionLang, ProjectionCoDeveloper) {
    try {
        const newProjection = { "ProjectName": ProjectionName, "ProjectLang": ProjectionLang, "CoDeveloper": ProjectionCoDeveloper };
        // fetch Post request to insert new projection data
        const response = await fetch("https://67ddabf7471aaaa7428230f7.mockapi.io/MyProject/Projections", { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newProjection) });
        if (response.ok) {
            return newProjection;
        }
        else {
            throw new Error("Failed to insert new projection");
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function GetProjections() {
    try {
        // fetch Get request to get all projections data
        const response = await fetch("https://67ddabf7471aaaa7428230f7.mockapi.io/MyProject/Projections");
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        else {
            throw new Error("Failed to get projections data");
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function DeleteProjection(ProjectionId) {
    try {
        // fetch Delete request to delete projection data
        const response = await fetch(`https://67ddabf7471aaaa7428230f7.mockapi.io/MyProject/Projections/${ProjectionId}`, { method: 'DELETE' });
        if (response.ok) {
            return true;
        }
        else {
            throw new Error("Failed to delete projection");
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function UpdateProjection(ProjectionId, ProjectionName, ProjectionLang, ProjectionCoDeveloper) {
    try {
        const updatedProjection = { "ProjectName": ProjectionName, "ProjectLang": ProjectionLang, "CoDeveloper": ProjectionCoDeveloper };
        // fetch Put request to update projection data
        const response = await fetch(`https://67ddabf7471aaaa7428230f7.mockapi.io/MyProject/Projections/${ProjectionId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(updatedProjection) });
        if (response.ok) {
            return updatedProjection;
        }
        else {
            throw new Error("Failed to update projection");
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function GetProjectionById(ProjectionId) {
    try {
        // fetch Get request to get projection data by id
        const response = await fetch(`https://67ddabf7471aaaa7428230f7.mockapi.io/MyProject/Projections/${ProjectionId}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        else {
            throw new Error("Failed to get projection by id");
        }
    }
    catch (error) {
        console.log(error);
    }
}