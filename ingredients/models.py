from django.db import models


# Create your models here.
class Type(models.Model):
    text = models.CharField(max_length=255)

    def __str__(self):
        return self.text


class Diet(models.Model):
    text = models.CharField(max_length=255)
    exclusion = models.ManyToManyField(Type)

    def __str__(self):
        return self.text


class ValidIngredients(models.Model):
    text = models.CharField(max_length=255)
    UNIT_CHOICES = (('ea', 'item'), ('ml', 'millilitre'), ('g', 'grams'))
    units = models.CharField(choices=UNIT_CHOICES, max_length=2)
    classification = models.ManyToManyField(Type)

    def __str__(self):
        return self.text


class UserIngredients(models.Model):
    text = models.ForeignKey(ValidIngredients, on_delete=models.PROTECT)
    amount = models.IntegerField

    def __str__(self):
        return self.text


class RecipeIngredients(models.Model):
    text = models.ForeignKey(ValidIngredients, on_delete=models.PROTECT)
    amount = models.IntegerField

    def __str__(self):
        return self.text
