FROM node:22.11.0

ADD starts.sh /

RUN chmod +x /starts.sh

CMD ["/starts.sh"]