# 2_todo_dataframe.py
import pandas as pd

tasks = [
    {"Task": "Collect data", "Status": "Done"},
    {"Task": "Clean data", "Status": "Pending"},
    {"Task": "Analyze data", "Status": "Pending"},
]

df = pd.DataFrame(tasks)
print("📋 To-Do Tracker:")
print(df)

pending = df[df["Status"] == "Pending"]
print("\n⏳ Pending Tasks:")
print(pending)
