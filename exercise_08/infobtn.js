class InfoBtn extends HTMLElement {
  constructor() {
    super();
    this._isHidden = true;
    this._btnTextActive = "Show";
    this._btnTextInactive = "Hide";
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
      #info-box {
        display: none;
      }
    </style>
    <button></button>
    <p id="info-box"><slot>Default slot</slot></p>
    `;
  }

  connectedCallback() {
    if (this.hasAttribute("btntextact")) {
      this._btnTextActive = this.getAttribute("btntextact");
    }
    if (this.hasAttribute("btntextinact")) {
      this._btnTextInactive = this.getAttribute("btntextinact");
    }

    const button = this.shadowRoot.querySelector("button");
    const infoEl = this.shadowRoot.querySelector("p");

    button.textContent = this._btnTextActive;

    button.addEventListener("click", () => {
      if (this._isHidden) {
        infoEl.style.display = "block";
        button.textContent = this._btnTextInactive;
        this._isHidden = false;
      } else {
        infoEl.style.display = "none";
        button.textContent = this._btnTextActive;
        this._isHidden = true;
      }
    });
  }
}

customElements.define("sk-infobtn", InfoBtn);
