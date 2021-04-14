import React from "react";
import { loadStripe } from "@stripe/​stripe-js";

function loadstripe() {
  const promise = loadStripe(
    "pk_test_51IYbdjBpyry7U3kiIFpxDwK3HZ0c1qUHSQue5CrrzDCC4bYnqSdrW88vKe74VkMfGTbF0WyBxLWhTOhm5jbVEVMX00fzSmBOqT"
  );
  return;
}

export default loadstripe;
