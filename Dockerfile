# Dockerfile

FROM python:3.10.4-slim
WORKDIR /app
COPY . /app
RUN pip3 install --no-cache-dir -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
EXPOSE 5000
CMD ["python", "main.py"]
