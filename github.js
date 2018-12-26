class GitHub {
  constructor() {
    this.client_id = 'a86318ce0425204fe46c';
    this.client_secret = '9403cb43c9aee1a5ad408b69f053e6eb2eeb1c1b';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user) {
    const profileURL = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
    const profileResponse = await fetch(profileURL);
    const profileData = await profileResponse.json();

    const reposURL = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;
    const reposResponse = await fetch(reposURL);
    const reposData = await reposResponse.json();

    // return an object. If key name is same as value name, just use one.
    return {
      profile: profileData,
      repos: reposData
    }
  }
}