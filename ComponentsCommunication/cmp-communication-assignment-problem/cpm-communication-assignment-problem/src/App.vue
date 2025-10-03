<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";

export default {
  components: {
    ActiveUser,
    UserData,
  },
  data() {
    return {
      user: {
        name: "Mauricio",
        age: 27,
      },
    };
  },
  methods: {
    setNewUser(name, age) {
      this.user.name = name;
      this.user.age = +age;
    },
  },
};
</script>

<template>
  <div class="app-container">
    <h1 class="app-title">User Management</h1>
    <ActiveUser :user-name="user.name" :user-age="user.age"></ActiveUser>
    <UserData @set-new-user="setNewUser"></UserData>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  padding: 2rem;
}

.app-container {
  max-width: 600px;
  margin: 0 auto;
}

.app-title {
  text-align: center;
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

/* ActiveUser Styling */
section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
}

section h1 {
  margin: 0 0 1.5rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
}

section h2,
section h3 {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  margin-bottom: 0.75rem;
  font-weight: 500;
}

section h3 {
  margin-bottom: 0;
}

/* UserData Form Styling */
form {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

label {
  font-weight: 500;
  color: #2c3e50;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  display: block;
  text-transform: capitalize;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
}

input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

button {
  width: 100%;
  padding: 0.875rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

button:active {
  transform: translateY(0);
}
</style>
