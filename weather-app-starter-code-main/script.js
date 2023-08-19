let isLoading = true;
let allUsers = [];

async function loadUserData() {
  try {
    isLoading = true;

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    allUsers = data;

    renderUsers(allUsers);

    isLoading = false;
  } catch (error) {
    console.error('Error fetching user data:', error.message);
  }
}

function renderUsers(users) {
const container = document.getElementById("userDataDisplay");
    const userCards = isLoading
    ? "<p>Loading data...</p>"
    : !users.length
    ? "<p>No users found or no data available.</p>"
    : users
        .map((user) => {
          const status = user.completed ? "✅ Completed" : "❌ Not Completed";
          return `
      <div class="user-card">
        <h2>${user.name}</h2>
        <p>Name: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: ${user.website}</p>
        <h2>Address</h2>
        <p>Street: ${user.street}</p>
        <p>Suite: ${user.suite}</p>
        <p>City: ${user.city}</p>
        <p>Zip: ${user.zip}</p>
        <h2>Company</h2>
        <p>Name: ${user.company.name}</p>
        <p>Catchphrase: ${user.Catchphrase}</p>
        <p>BS: ${user.BS}</p>
      </div>
    `;
        })
        .join("");

  container.innerHTML = userCards;
}

function filterUsers() {
  const searchTerm = document.getElementById('searchField').value.toLowerCase();
  const filteredUsers = allUsers.filter(user => user.name.toLowerCase().includes(searchTerm));
  
  renderUsers(filteredUsers);
}

loadUserData();
