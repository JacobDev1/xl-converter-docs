#!/usr/bin/python3

import os, json, argparse, subprocess
from html.parser import HTMLParser

PAGE_LIST_PATH = os.path.join(".", "src", "pages", "page_list.json")
PAGE_FOLDER_PATH = os.path.join(".", "src", "pages")
SEARCH_INDEX_PATH = os.path.join(".", "src", "assets", "search_index.json")

# Code
class Parser(HTMLParser):
    data = ""

    def handle_data(self, data):
        if not data.isspace():
            data_cleaned = " ".join(data.split())   # Remove multiple whitespaces
            if any(n in data for n in ["export default function", "{' / '}", f");{chr(10)}"]):
                return

            # print(f"\"{data_cleaned}\"")

            self.data += data_cleaned + " "

def parseJSX(jsx):
    parser = Parser()
    parser.feed("".join(jsx))
    return parser.data

def saveJSONtoFile(_json, path):
    with open(path, "w") as f:
        f.writelines(json.dumps(_json, indent=4))

def loadFileAsJSON(path):
    loaded = {}
    with open(path, "r") as f:
        loaded = json.load(f)

    return loaded

def loadFileAsList(path):
    content = ""
    with open(path, "r") as page_f:
        content = page_f.readlines()

    return content

if __name__ == "__main__":
    pages = loadFileAsJSON(PAGE_LIST_PATH)
    output = []

    for page in pages["entries"]:
        path = os.path.join(PAGE_FOLDER_PATH, pages["files"][page[0]])

        output.append({
            "title": page[0],
            "link": page[1],
            "content": parseJSX(loadFileAsList(path))
        })

    saveJSONtoFile(output, SEARCH_INDEX_PATH)