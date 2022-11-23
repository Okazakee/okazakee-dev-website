#
# Calypso-Pi Project
[www.calypso-pi.xyz](www.calypso-pi.xyz)

This project is focused on creating a Minecraft Server connected to a Web Platform using a Single Board Computer and Docker. At the end of the above, the idea is to create a system for **"Plug & Play"** installation.

In the development of the Web Platform **NextJS** will be used as frontend framework and **MariaDB** will be used to store user data (**NestJS/ExpressJS** will be used as ackend framework if there will be need to).

As for the Minecraft Server, **PaperMC** software will be used as core, with the help of **LazyMC** a solution for managing sleep state of the server preserving Raspberry Pi lifespan. **Plugins** will be used for maintenance, statistics and optimizations configured as for our resources and needs. Both instances will be hosted in **Docker** containers on the Raspberry Pi, which we will name CalypsoPi-MCS.

---
Server Hardware:
- [SBC](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/): Raspberry Pi 4B - 4 core (oc 2.0Ghz), 8GB ram
- [Case](https://www.argon40.com/argon-one-m-2-case-for-raspberry-pi-4.html): Argon One M.2
- [SSD](https://www.westerndigital.com/it-it/products/internal-drives/wd-green-sata-m-2-ssd#WDS240G2G0B): 240GB WD Green M.2
- [Extra](https://www.samsung.com/it/memory-storage/memory-card/evo-microsd-card-64gb-mb-mp64ha-eu/): HDD 1TB WD Blue
#
*The project is completely open-source all details on the dedicated [GitHub page](https://github.com/CalypsoPi).*
