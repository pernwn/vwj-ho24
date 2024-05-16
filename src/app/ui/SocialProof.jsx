// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,

//   //Tooltip,
// } from "@material-tailwind/react";
// import { reviews } from "./reviews";

// const ReviewCard = ({ name, occupation, review }) => {
//   return (
//     <Card className="max-w-[24rem] overflow-hidden">
//       <CardHeader
//         floated={false}
//         shadow={false}
//         color="transparent"
//         className="m-0 rounded-none"
//       >
//         {/* <Avatar
//         size="sm"
//         variant="circular"
//         alt="natali craig"
//         src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
//         className="border-2 border-white hover:z-10"
//       /> */}
//         <h5 className="text-h5 mt-3 font-normal">{name}</h5>
//         <h6>{occupation}</h6>
//         {/* Rating */}
//       </CardHeader>
//       <CardBody>
//         <p className="text-p">{review}</p>
//       </CardBody>
//       <CardFooter className="flex items-center justify-between">
//         <p className="text-thin font-normal">CyberMinds</p>
//       </CardFooter>
//     </Card>
//   );
// };

// const SocialProof = () => {
//   return (
//     <>
//       {reviews.map((review) => (
//         <ReviewCard
//           key={review.id}
//           name="Name"
//           occupation="Occupation"
//           review={review.text}
//         />
//       ))}
//     </>
//   );
// };

// export default SocialProof;
