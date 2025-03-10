import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="put-request"
export default class extends Controller {
  static values = {
    url: String
  }

  async start() {
    const token = document.querySelector('meta[name="csrf-token"]').content;

    const response = await fetch(this.urlValue, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CSRF-Token': token // ✅ CSRF token added
      },
      body: JSON.stringify(this.request_body())
    });

    const data = await response.json();
    console.log(data);
  }

  // private

  request_body() {
    return {todo_item: { completed: this.element.checked } }
  }
}
