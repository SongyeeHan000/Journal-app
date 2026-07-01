# Database connection. 
# Connects to MongoDB and exports db object
# Only ONE place for DB connection (important for scaling)



from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL")

client = AsyncIOMotorClient(MONGO_URL)
db = client.secure_journal