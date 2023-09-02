
const Technician = [
    {
      name: "Olivia Adams",
      phoneNumber: "555-888-1234",
      payPerHour: 19,
      location: "Oakwood",
      jobRole: "Plumber",
      desc: "Skilled plumber known for quick and efficient fixes on plumbing issues.",
      exp: "10 years",
      image: "https://media.istockphoto.com/id/959806596/photo/repairing-sink.webp?b=1&s=612x612&w=0&k=20&c=EMYO0PWoBCUQl_J4JGynJMZ46kYdqWwQZIcl3_jZVRg=" 
    },
    {
      name: "Liam Turner",
      phoneNumber: "555-777-2345",
      payPerHour: 24,
      location: "Riverside",
      jobRole: "Bike Repair",
      desc: "Passionate bike mechanic with a knack for repairing all types of bicycles.",
      exp: "8 years",
      image: "https://media.istockphoto.com/id/1525380859/photo/asian-chinese-cyclist-helping-his-team-checking-on-bicycle-chain-at-roadside-in-rural-scene.webp?b=1&s=170667a&w=0&k=20&c=-gcSEEmAnD-NKi46QxadzWqpUMxPOTK2XFx7LZD8ioI="
    },
    {
      name: "Isabella Bell",
      phoneNumber: "555-666-3456",
      payPerHour: 28,
      location: "Highland",
      jobRole: "Ac Technician",
      desc: "Certified AC technician specializing in cooling system maintenance and repairs.",
      exp: "11 years",
      image: "https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWMlMjB0ZWNobmljaWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
    },
    {
      name: "Henry Davis",
      phoneNumber: "555-555-4567",
      payPerHour: 21,
      location: "Bridgewater",
      jobRole: "Tire Repair",
      desc: "Dedicated tire repair specialist offering reliable and efficient services.",
      exp: "9 years",
      image: "https://media.istockphoto.com/id/998671020/photo/mechanic-changing-car-tire-at-work.webp?b=1&s=170667a&w=0&k=20&c=0U2fJklxPd_6S1h4nxPV05uNkXbV-oLSaXXQQj3jl2g="
    },
    {
      name: "Ava White",
      phoneNumber: "555-444-5678",
      payPerHour: 22,
      location: "Sunsetville",
      jobRole: "Carpenter",
      desc: "Experienced carpenter known for crafting custom woodworking designs.",
      exp: "14 years",
      image: "https://media.istockphoto.com/id/1420112974/photo/mature-man-cutting-wood-in-workshop.webp?b=1&s=170667a&w=0&k=20&c=INAU36vcOGi5XOCInt85zagPLuZ5iYfODUbp31nDens="
    },
    {
      name: "William Martinez",
      phoneNumber: "555-333-6789",
      payPerHour: 27,
      location: "Greenfield",
      jobRole: "Electrician",
      desc: "Experienced electrician offering quality electrical solutions for homes and businesses.",
      exp: "16 years",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWNpYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Emma Harris",
      phoneNumber: "555-222-7890",
      payPerHour: 18,
      location: "Hillside",
      jobRole: "Car Repair",
      desc: "Skilled car mechanic specializing in a wide range of automotive repairs.",
      exp: "10 years",
      image: "https://plus.unsplash.com/premium_photo-1661953077639-5572b0fba7f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhciUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Noah Scott",
      phoneNumber: "555-111-8901",
      payPerHour: 23,
      location: "Meadowville",
      jobRole: "Bike Repair",
      desc: "Passionate bike enthusiast skilled in repairing various types of bicycles.",
      exp: "6 years",
      image: "https://media.istockphoto.com/id/614415432/photo/this-bike-will-be-perfect.webp?b=1&s=170667a&w=0&k=20&c=-CzhAHIKm5nkMz1KVIwn21tQvqY60lTYpK6zFVBe8jo="
    },
    {
      name: "Oliver Turner",
      phoneNumber: "555-999-9012",
      payPerHour: 25,
      location: "Mountain View",
      jobRole: "Ac Technician",
      desc: "Experienced AC technician offering efficient solutions for cooling needs.",
      exp: "12 years",
      image: "https://plus.unsplash.com/premium_photo-1682126012378-859ca7a9f4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWMlMjB0ZWNobmljaWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
    },
    {
      name: "Sophia Walker",
      phoneNumber: "555-888-0123",
      payPerHour: 20,
      location: "Harbor City",
      jobRole: "Tire Repair",
      desc: "Tire repair specialist known for thorough and timely services.",
      exp: "9 years",
      image: "https://media.istockphoto.com/id/898487280/photo/handsome-auto-service-mechanics.webp?b=1&s=170667a&w=0&k=20&c=Ba9XDHhGQKGGiho-rsUYKl9tNuTfAa2DCRGMkdK9_Tk="
    },
    {
      name: "James Rodriguez",
      phoneNumber: "555-777-1234",
      payPerHour: 18,
      location: "Willowbrook",
      jobRole: "Plumber",
      desc: "Experienced plumber offering reliable solutions for all plumbing needs.",
      exp: "10 years",
      image: "https://media.istockphoto.com/id/1204813771/photo/male-worker-inspecting-valve.jpg?b=1&s=612x612&w=0&k=20&c=-Qc9czzynqy_laGthgdtI9brX1hdj5ff0k2eVX7ekqk="
    },
    {
      name: "Emma Martinez",
      phoneNumber: "555-666-2345",
      payPerHour: 26,
      location: "Oakwood",
      jobRole: "Bike Repair",
      desc: "Bike mechanic with a passion for fixing and enhancing bicycles.",
      exp: "7 years",
      image: "https://media.istockphoto.com/id/1412861888/photo/woman-fixing-her-bicycle-at-home.webp?b=1&s=170667a&w=0&k=20&c=c4RB3L9i7TsvIdC89kPsrgxD0WGY07VIayMoZYQqX3E="
    },
    {
      name: "Oliver Smith",
      phoneNumber: "555-555-3456",
      payPerHour: 22,
      location: "Riverside",
      jobRole: "Ac Technician",
      desc: "Skilled AC technician specializing in cooling system installations and repairs.",
      exp: "9 years",
      image: "https://media.istockphoto.com/id/1308375457/photo/cleaning-air-conditioner.webp?b=1&s=170667a&w=0&k=20&c=v8LzT5Eyrq2oHZjLZqPMJyCZObA1IFV1L9LFZa48Hps="
    },
    {
      name: "Isabella Johnson",
      phoneNumber: "555-444-4567",
      payPerHour: 20,
      location: "Bridgewater",
      jobRole: "Tire Repair",
      desc: "Tire repair specialist dedicated to providing quality service for all vehicles.",
      exp: "11 years",
      image: "https://images.unsplash.com/photo-1589235308001-4558e36846f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlyZSUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "William Williams",
      phoneNumber: "555-333-5678",
      payPerHour: 24,
      location: "Sunsetville",
      jobRole: "Carpenter",
      desc: "Master carpenter known for custom woodworking and attention to detail.",
      exp: "14 years",
      image: "https://media.istockphoto.com/id/1458711335/photo/male-wood-furniture-joiner-work-in-diy-wooden-workshop-real-authentic-people-worker.webp?b=1&s=170667a&w=0&k=20&c=MYhOSwYt7QwT4c8gBp3lCZZMje4r3QydPKFx4zBN2mI="
    },
    {
      name: "Sophia Davis",
      phoneNumber: "555-222-6789",
      payPerHour: 28,
      location: "Greenfield",
      jobRole: "Electrician",
      desc: "Experienced electrician providing efficient electrical solutions.",
      exp: "15 years",
      image: "https://media.istockphoto.com/id/1354891373/photo/a-male-electrician-works-in-a-switchboard-with-an-electrical-connecting-cable.webp?b=1&s=170667a&w=0&k=20&c=bFCrpAQVkTsSPxhH3gpY1c6O8rwhXuvBZxpvM8Jgago="
    },
    {
      name: "Noah Harris",
      phoneNumber: "555-111-7890",
      payPerHour: 21,
      location: "Hillside",
      jobRole: "Car Repair",
      desc: "Skilled car mechanic known for diagnosing and fixing complex issues.",
      exp: "12 years",
      image: "https://media.istockphoto.com/id/1423278446/photo/auto-mechanic-service-and-repair.webp?b=1&s=170667a&w=0&k=20&c=QeDkOIsZ_beQqLTLBmVIqsQGhx4iHpP0ioVDAq8LZzM="
    },
    {
      name: "Olivia Turner",
      phoneNumber: "555-999-8901",
      payPerHour: 19,
      location: "Meadowville",
      jobRole: "Bike Repair",
      desc: "Passionate bike mechanic offering quick and reliable bicycle repairs.",
      exp: "8 years",
      image: "https://plus.unsplash.com/premium_photo-1663046044224-524bf6295edc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZSUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Liam Martinez",
      phoneNumber: "555-888-9012",
      payPerHour: 23,
      location: "Mountain View",
      jobRole: "Ac Technician",
      desc: "Certified AC technician specializing in maintaining and repairing cooling systems.",
      exp: "10 years",
      image: "https://media.istockphoto.com/id/1417100397/photo/technician-cleaning-air-conditioner-filter.webp?b=1&s=170667a&w=0&k=20&c=xGkkqMnBdaGf9Yt8IklAwtCHsAeacEp6e6RzqDvYKK4="
    },
    {
      name: "Ava Rodriguez",
      phoneNumber: "555-777-0123",
      payPerHour: 25,
      location: "Harbor City",
      jobRole: "Tire Repair",
      desc: "Dedicated tire repair specialist with a focus on safety and quality service.",
      exp: "13 years",
      image: "https://plus.unsplash.com/premium_photo-1683742711459-1f856a72d0a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGlyZSUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }, {
      name: "Ethan Smith",
      phoneNumber: "555-666-1234",
      payPerHour: 18,
      location: "Willowbrook",
      jobRole: "Plumber",
      desc: "Experienced plumber offering efficient and reliable plumbing services.",
      exp: "9 years",
      image: "https://media.istockphoto.com/id/1312311812/photo/man-installing-pipe-system-of-bathtub-with-hydromassage.jpg?b=1&s=612x612&w=0&k=20&c=kto5E8NXxbuxNNStnMZHGL8qIVNCjXqDqrm-Qzt6ESo="
    },
    {
      name: "Olivia Johnson",
      phoneNumber: "555-555-2345",
      payPerHour: 24,
      location: "Oakwood",
      jobRole: "Bike Repair",
      desc: "Bike enthusiast skilled in repairing and maintaining bicycles of all types.",
      exp: "6 years",
      image: "https://images.unsplash.com/photo-1600920716019-2da25833765d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJpa2UlMjByZXBhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Noah Williams",
      phoneNumber: "555-444-3456",
      payPerHour: 22,
      location: "Riverside",
      jobRole: "Ac Technician",
      desc: "Certified AC technician offering comprehensive cooling system solutions.",
      exp: "10 years",
      image: "https://media.istockphoto.com/id/1497128676/photo/air-conditioner-repairman-works-on-home-unit.webp?b=1&s=170667a&w=0&k=20&c=lHc5qwU1NCjyMRtAG5lBnm8mM6zDZGaVOUN88JwhFoc="
    },
    {
      name: "Emma Davis",
      phoneNumber: "555-333-4567",
      payPerHour: 19,
      location: "Bridgewater",
      jobRole: "Tire Repair",
      desc: "Tire repair specialist known for prompt and reliable service.",
      exp: "7 years",
      image: "https://images.unsplash.com/photo-1671790731634-1f72f1785331?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRpcmUlMjByZXBhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Liam Anderson",
      phoneNumber: "555-222-5678",
      payPerHour: 25,
      location: "Sunsetville",
      jobRole: "Carpenter",
      desc: "Experienced carpenter skilled in creating custom woodworking designs.",
      exp: "13 years",
      image: "https://plus.unsplash.com/premium_photo-1664302193681-8f87ec91a5de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FycGVudGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Ava Wilson",
      phoneNumber: "555-111-6789",
      payPerHour: 28,
      location: "Greenfield",
      jobRole: "Electrician",
      desc: "Dedicated electrician offering safe and efficient electrical solutions.",
      exp: "14 years",
      image: "https://media.istockphoto.com/id/1428071835/photo/man-an-electrical-technician-working-in-a-switchboard-with-fuses.webp?b=1&s=170667a&w=0&k=20&c=kFX1gzlbwPYMuu635JUHNUsOaec0XrpIWAaYh-QVtJE="
    },
    {
      name: "James Walker",
      phoneNumber: "555-999-7890",
      payPerHour: 21,
      location: "Hillside",
      jobRole: "Car Repair",
      desc: "Auto mechanic known for diagnosing and repairing vehicles of all makes.",
      exp: "11 years",
      image: "https://media.istockphoto.com/id/1368159665/photo/checking-the-engine-oil-level-auto-repair-shop-or-auto-service.webp?b=1&s=170667a&w=0&k=20&c=VDh81wRTZI7FuUXczqkd6k10iS3z5TK-r3PBWLtq46g="
    },
    {
      name: "Oliver Turner",
      phoneNumber: "555-888-8901",
      payPerHour: 23,
      location: "Meadowville",
      jobRole: "Bike Repair",
      desc: "Passionate bike mechanic skilled in various bicycle repairs and modifications.",
      exp: "8 years",
      image: "https://images.unsplash.com/photo-1452980904795-dc36a4d90da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpa2UlMjByZXBhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Emma Rodriguez",
      phoneNumber: "555-777-9012",
      payPerHour: 20,
      location: "Mountain View",
      jobRole: "Ac Technician",
      desc: "Certified AC technician experienced in servicing and repairing cooling systems.",
      exp: "12 years",
      image: "https://media.istockphoto.com/id/489211146/photo/air-conditioner-repairman-works-on-home-unit-blue-collar-worker.jpg?s=612x612&w=0&k=20&c=bv18SUuuCiHkUZQ3qhzpYzqHufQ5povoyWy2h5U85RM="
    },
    {
      name: "William Brown",
      phoneNumber: "555-666-0123",
      payPerHour: 26,
      location: "Harbor City",
      jobRole: "Tire Repair",
      desc: "Skilled tire repair specialist offering reliable and efficient solutions.",
      exp: "10 years",
      image: "https://plus.unsplash.com/premium_photo-1661372060690-964da79ed5f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRpcmUlMjByZXBhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },{
      name: "Sophia Wilson",
      phoneNumber: "555-555-1234",
      payPerHour: 19,
      location: "Willowbrook",
      jobRole: "Plumber",
      desc: "Experienced plumber offering efficient and effective plumbing solutions.",
      exp: "8 years",
      image: "https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Liam Harris",
      phoneNumber: "555-444-2345",
      payPerHour: 25,
      location: "Oakwood",
      jobRole: "Bike Repair",
      desc: "Bike enthusiast skilled in repairing and customizing bicycles.",
      exp: "7 years",
      image: "https://media.istockphoto.com/id/833171812/photo/we-look-forward-to-serving-you.webp?b=1&s=170667a&w=0&k=20&c=YniyAzxLYske1_T9WCRzGQptNQ44ng9YbePM7dky8-w="
    },
    {
      name: "Olivia Martinez",
      phoneNumber: "555-333-3456",
      payPerHour: 21,
      location: "Riverside",
      jobRole: "Ac Technician",
      desc: "Certified AC technician with expertise in cooling system maintenance.",
      exp: "9 years",
      image: "https://media.istockphoto.com/id/489213622/photo/air-conditioner-repairmen-work-on-home-unit-blue-collar-workers.jpg?s=612x612&w=0&k=20&c=ZBdFmK3jvUznAOZ24YMo9PPArPx3GMjtRirpqxWY-j4="
    },
    {
      name: "Noah Davis",
      phoneNumber: "555-222-4567",
      payPerHour: 20,
      location: "Bridgewater",
      jobRole: "Tire Repair",
      desc: "Dedicated tire repair specialist known for reliable service.",
      exp: "6 years",
      image: "https://cdn.pixabay.com/photo/2020/06/16/23/45/boy-5307568_640.jpg"
    },
    {
      name: "Emma Smith",
      phoneNumber: "555-111-5678",
      payPerHour: 24,
      location: "Sunsetville",
      jobRole: "Carpenter",
      desc: "Experienced carpenter skilled in crafting unique woodworking projects.",
      exp: "11 years",
      image: "https://images.unsplash.com/photo-1608613304810-2d4dd52511a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnBlbnRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Ava Miller",
      phoneNumber: "555-999-6789",
      payPerHour: 27,
      location: "Greenfield",
      jobRole: "Electrician",
      desc: "Dedicated electrician offering comprehensive electrical solutions.",
      exp: "12 years",
      image: "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWxlY3RyaWNpYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "James Wilson",
      phoneNumber: "555-888-7890",
      payPerHour: 22,
      location: "Hillside",
      jobRole: "Car Repair",
      desc: "Auto mechanic known for precise and efficient vehicle repairs.",
      exp: "10 years",
      image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcmVwYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Oliver Taylor",
      phoneNumber: "555-777-8901",
      payPerHour: 23,
      location: "Meadowville",
      jobRole: "Bike Repair",
      desc: "Passionate bike mechanic skilled in repairing and tuning bicycles.",
      exp: "9 years",
      image: "https://media.istockphoto.com/id/1140335977/photo/caucasian-dedicated-man-putting-tyre-on-bicycle-wheel-while-standing-in-workshop.webp?b=1&s=170667a&w=0&k=20&c=RZ6C77CvDibPJxSLTrM1nFHkQLbwa21GSEPsklHjLVI="
    },
    {
      name: "Sophia Anderson",
      phoneNumber: "555-666-9012",
      payPerHour: 18,
      location: "Mountain View",
      jobRole: "Ac Technician",
      desc: "Certified AC technician with a focus on cooling system diagnostics.",
      exp: "7 years",
      image: "https://media.istockphoto.com/id/531884229/photo/air-conditioner-repairmen-work-on-home-unit-blue-collar-workers.jpg?s=612x612&w=0&k=20&c=nq-iDKmyxXEKO3RYm5CQZ6Jz26qZDkilVpqOFhItUrU="
    },
    {
      name: "Liam Rodriguez",
      phoneNumber: "555-555-0123",
      payPerHour: 26,
      location: "Harbor City",
      jobRole: "Tire Repair",
      desc: "Skilled tire repair specialist offering fast and reliable solutions.",
      exp: "11 years",
      image: "https://plus.unsplash.com/premium_photo-1661371877268-176144d770ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRpcmUlMjByZXBhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    }
      ];
  
    export default Technician;