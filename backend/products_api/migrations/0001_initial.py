# Generated by Django 3.2.18 on 2023-03-05 09:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('blog_api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CategoryModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='ProductModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('quantity', models.TextField(default='100g', max_length=100)),
                ('description', models.CharField(max_length=1000)),
                ('price', models.DecimalField(decimal_places=2, max_digits=20)),
                ('rating', models.DecimalField(decimal_places=2, max_digits=3)),
                ('stock', models.IntegerField()),
                ('categories', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product', to='products_api.categorymodel')),
                ('images', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product', to='blog_api.imagemodel')),
            ],
        ),
    ]
