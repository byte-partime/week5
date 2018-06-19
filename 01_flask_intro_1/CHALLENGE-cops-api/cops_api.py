from flask import Flask, jsonify, request
import pandas as pd

app = Flask(__name__)
df = pd.read_csv('cpuo.csv')
