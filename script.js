// Static data for States, Districts, and Mandals
const data = {
    "Andhra Pradesh": {
        "District1": ["Mandal1", "Mandal2"],
        "District2": ["Mandal3", "Mandal4"]
    },
    "Telangana": {
        "District3": ["Mandal5", "Mandal6"],
        "District4": ["Mandal7", "Mandal8"]
    }
};

// Populate States dropdown
window.onload = function() {
    const stateDropdown = document.getElementById("state");
    Object.keys(data).forEach(state => {
        let option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateDropdown.appendChild(option);
    });
};

// Populate Districts dropdown based on selected State
function loadDistricts() {
    const state = document.getElementById("state").value;
    const districtDropdown = document.getElementById("district");
    const mandalDropdown = document.getElementById("mandal");

    // Clear previous options
    districtDropdown.innerHTML = "<option value=''>--Select District--</option>";
    mandalDropdown.innerHTML = "<option value=''>--Select Mandal--</option>";

    if (state && data[state]) {
        Object.keys(data[state]).forEach(district => {
            let option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtDropdown.appendChild(option);
        });
    }
}

// Populate Mandals dropdown based on selected District
function loadMandals() {
    const state = document.getElementById("state").value;
    const district = document.getElementById("district").value;
    const mandalDropdown = document.getElementById("mandal");

    // Clear previous options
    mandalDropdown.innerHTML = "<option value=''>--Select Mandal--</option>";

    if (state && district && data[state][district]) {
        data[state][district].forEach(mandal => {
            let option = document.createElement("option");
            option.value = mandal;
            option.textContent = mandal;
            mandalDropdown.appendChild(option);
        });
    }
}
