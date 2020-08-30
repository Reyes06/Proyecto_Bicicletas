# Proyecto_Bicicletas

    echo 'deb http://cz.archive.ubuntu.com/ubuntu precise main universe' >> /etc/apt/sources.list.d/extra.list

    echo 'deb http://cz.archive.ubuntu.com/ubuntu trusty main universe' >> /etc/apt/sources.list.d/extra.list

    apt-get update
    apt-get install alien autoconf automake autotools-dev binutils doxygen \
    elfutils expat gawk gcc gcc-multilib g++-multilib libstdc++6:i386 ksh less libtiff5 \
    libtiff5-dev lib32z1 libaio1 libaio-dev libc6-dev libc6-dev-i386 libc6-i386 \
    libelf-dev libltdl-dev libmotif4 libodbcinstq4-1 libodbcinstq4-1:i386 \
    libpthread-stubs0 libpth-dev libstdc++5 lsb-cxx make \
    pdksh openssh-server rlwrap rpm sysstat unixodbc unixodbc-dev x11-utils \
    zlibc libglapi-mesa:i386 libglu1-mesa:i386 libqt4-opengl:i386 \
    libpthread-workqueue0 libpthread-workqueue-dev libzthread-2.3-2 libzthread-dev \
    libpthread-stubs0-dev libaio-dev
    mv /etc/apt/sources.list.d/extra.list /etc/apt/sources.list.d/extra.list.backup
