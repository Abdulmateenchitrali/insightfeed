# insightfeed Application Dockerization Documentation

## Introduction
This documentation provides step-by-step instructions for containerizing and running a insightfeed application using Docker. Containerization offers a portable and efficient way to deploy applications, ensuring consistency across different environments.

## Prerequisites
Before proceeding, ensure you have the following prerequisites:
- Docker installed (version 20.10 or later)
- Basic understanding of Docker concepts

## Setup

2. Clone the insightfeed application repository from GitHub:

git clone https://github.com/Abdulmateenchitrali/insightfeed
cd insightfeed


3. Install application dependencies using yarn:

Building the Docker Image
docker build -t insight-feed:dev .

Running the Docker Container

docker run -p 5173:5173 insight-feed:dev


