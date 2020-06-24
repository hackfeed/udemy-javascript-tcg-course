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

    this._btnEl = this.shadowRoot.querySelector("button");
    this._infoEl = this.shadowRoot.querySelector("p");

    this._btnEl.addEventListener("click", () => {
      if (this._isHidden) {
        this._infoEl.style.display = "block";
        this._btnEl.textContent = this._btnTextInactive;
        this._isHidden = false;
      } else {
        this._infoEl.style.display = "none";
        this._btnEl.textContent = this._btnTextActive;
        this._isHidden = true;
      }
    });
  }

  connectedCallback() {
    if (this.hasAttribute("btntextact")) {
      this._btnTextActive = this.getAttribute("btntextact");
    }
    if (this.hasAttribute("btntextinact")) {
      this._btnTextInactive = this.getAttribute("btntextinact");
    }

    this._btnEl.textContent = this._btnTextActive;
  }
}

customElements.define("sk-infobtn", InfoBtn);
