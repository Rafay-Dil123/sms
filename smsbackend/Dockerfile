# Base image
FROM python:3.9-slim

# Working directory
WORKDIR /app

# Copy requirements file and install dependencies
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the project files
COPY . .

# Expose the server port
EXPOSE 8000

# Run migrations and start the server
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--log-level", "debug", "smsbackend.wsgi"]