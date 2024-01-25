import json
import os

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import WebDriverException
from selenium.webdriver.firefox.options import Options

# Config
URL = "localhost:5173"
PAGE_LIST_PATH = os.path.join(".", "src", "pages", "menuEntries.json")
OUTPUT_PATH = os.path.join(".", "src", "assets", "search_index.json")

# Code
class GenerateSearchIndex():
    def __init__(self, base_url):
        self.base_url = base_url
        self.output = []

        firefox_opt = Options()
        firefox_opt.add_argument("--headless")
        self.driver = webdriver.Firefox(options=firefox_opt)

    def feed(self, title, url):
        self.driver.get(f"{self.base_url}{url}")
        elements = self.driver.find_elements(By.CLASS_NAME, "content")
        content = ""
        for e in elements:
            content += e.text + " "
        content = content.replace("\n"," ")

        self.output.append({
            "title": title,
            "link": url,
            "content": content
        })

    def getOutput(self):
        return self.output

    def quit(self):
        self.driver.quit()

def loadFileAsJSON(path):
    loaded = {}
    with open(path, "r") as f:
        loaded = json.load(f)

    return loaded

def saveJSONtoFile(_json, path):
    with open(path, "w") as f:
        f.writelines(json.dumps(_json, indent=4))

if __name__ == "__main__":
    page_list = loadFileAsJSON(PAGE_LIST_PATH)
    generator = GenerateSearchIndex(URL)
    pages_len = len(page_list)

    try:    
        for idx, page in enumerate(page_list):
            generator.feed(page[0], page[1])
            print(f"[Generating] {idx+1} out of {len(page_list)} pages")
    except WebDriverException:
        print("[Error] WebDriverException. Forgot to run `npm run serve`?")
        generator.quit()
        exit(1)
    except KeyboardInterrupt:
        print("[Interrupted] Keyboard Interrupted")
        generator.quit()
        exit(0)
    
    saveJSONtoFile(generator.getOutput(), OUTPUT_PATH)
    generator.quit()
    print(f"[Done] Saved to {OUTPUT_PATH}")