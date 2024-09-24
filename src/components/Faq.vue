<script setup lang="ts"></script>

<template>
  <div class="collapse collapse-arrow">
    <input type="radio" name="my-accordion-2" />
    <div class="collapse-title text-xl font-medium">What is Fweeble?</div>
    <div class="collapse-content">
      <p>
        Fweeble is a nutrition tracker that allows users to easily track their
        meals by either uploading an image or entering the name of the food they
        plan to eat. The app automatically analyzes the nutritional content of
        the meal and provides a breakdown of the nutrients, such as calories,
        proteins, fats, and carbohydrates. This automated process makes it
        effortless for users to monitor their daily intake and make informed
        dietary decisions.
      </p>
    </div>
  </div>
  <div class="collapse collapse-arrow">
    <input type="radio" name="my-accordion-2" />
    <div class="collapse-title text-xl font-medium">
      How does Fweeble calculate daily calorie needs?
    </div>
    <div class="collapse-content">
      <p>Fweeble calculates daily calorie needs using Gemini Flash</p>
    </div>
  </div>
  <div class="collapse collapse-arrow">
    <input type="radio" name="my-accordion-2" />
    <div class="collapse-title text-xl font-medium">Who built it?</div>
    <div class="collapse-content">
      <p>
        Fweeble was built by me, Gerry Desrian, an undergraduate student
        pursuing my S1 degree. I developed it to make nutrition tracking simpler
        and more intuitive for everyday users by leveraging automated food
        analysis and personalized calorie recommendations.
      </p>
    </div>
  </div>
  <div class="collapse collapse-arrow">
    <input type="radio" name="my-accordion-2" />
    <div class="collapse-title text-xl font-medium">
      What data do you collect?
    </div>
    <div class="collapse-content">
      <p>
        Fweeble collects a few key pieces of personal data to provide accurate
        and personalized nutrition tracking. It asks for your date of birth to
        calculate your age, which is important for determining your daily
        calorie needs. Additionally, it gathers your weight and height to
        estimate your Basal Metabolic Rate (BMR), a critical factor in
        calculating how many calories you need each day. Fweeble also considers
        your gender, as it affects how your body processes energy. All this data
        is used solely to tailor the app's recommendations to your specific
        nutritional needs and goals.
      </p>
    </div>
  </div>
  <div class="collapse collapse-arrow">
    <input type="radio" name="my-accordion-2" />
    <div class="collapse-title text-xl font-medium">Is my data secure?</div>
    <div class="collapse-content">
      <p>
        Yes, your data is secure. This web app does not store any sensitive
        information. It only uses the data you provide to calculate your daily
        nutritional needs, and it does so without saving personal details like
        your date of birth, weight, or height on any server. All calculations
        are done in real-time, ensuring your privacy and data security.
      </p>
    </div>
  </div>
</template>
