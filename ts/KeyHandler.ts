class KeyHandler {
  private keys: { key: string; down: boolean }[] = [];

  constructor() {
    window.addEventListener("keydown", (e) => {
      this.toggleKey(e.key.toLowerCase(), true);
    });
    window.addEventListener("keyup", (e) => {
      this.toggleKey(e.key.toLowerCase(), false);
    });
    window.addEventListener("blur", () => {
      this.keys = [];
    });
  }

  public toggleKey(key: string, keySet: boolean): void {
    const keyIndex = this.keys.findIndex((k) => k.key === key);
    if (keyIndex === -1) this.keys.push({ key, down: keySet });
    else this.keys[keyIndex].down = keySet;
  }

  public isKeyDown(key: string): boolean {
    const keyIndex = this.keys.findIndex((k) => k.key === key);
    return keyIndex !== -1 && this.keys[keyIndex].down;
  }
}

export default KeyHandler;
