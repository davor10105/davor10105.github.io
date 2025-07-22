---
layout: page
title: absLRP
permalink: /projects/abslrp/
---

## 🤖 Visualize Vision Transformer attribution maps and more!

This repository contains the source code for the new __Absolute Magnitude Layer-Wise Relevance Propagation__ attribution method and the __Global Evaluation Metric__ described in the paper https://dl.acm.org/doi/10.1145/3649458 .

## 🔎 Absolute Magnitude Layer-Wise Relevance Propagation

A novel Layer-Wise Propagation rule, referred to as **Abs**olute Magnitude **L**ayer-Wise **R**elevance **P**ropagation (__absLRP__). This rule effectively addresses the issue of incorrect relative attribution between neurons within the same layer that exhibit varying absolute magnitude activations. We apply this rule to three different architectures, including the very recent Vision Transformer.

![Alt text](images/image-2.png)
*Figure 1. absLRP visualizations for Vision Transformer architecture - PascalVOC*

![Alt text](images/image-1.png)
*Figure 2. absLRP visualizations for VGG architecture - ImageNet*

### 🔬 Usage
<details>
<summary>Import required modules</summary>

```python
import torch
from abslrp_gae.abslrp.rules.models import VGGAbsLRPRule, ResNetAbsLRPRule, VisionTransformerAbsLRPRule
from abslrp_gae.abslrp.relevancy_methods import AbsLRPRelevancyMethod
from abslrp_gae.utils import preprocess_image, visualize_batch
import timm
from timm.models.vision_transformer import VisionTransformer
from PIL import Image
```

</details>

Load a model from **timm** and apply the **absLRP** rule:
```python
# load the model
device = "cuda"
model = timm.create_model("vit_base_patch16_224", pretrained=True)
# model = timm.create_model("vgg16", pretrained=True)
# model = timm.create_model("resnet50", pretrained=True)
model.eval()
model.to(device)

# apply the absLRP rule to the model
VisionTransformerAbsLRPRule().apply(model)
# VGGAbsLRPRule().apply(model)
# ResNetAbsLRPRule().apply(model)
```
Load inference images and preprocess:
```python
is_vit = isinstance(model, VisionTransformer)
x = torch.stack(
    [
        preprocess_image(Image.open("images/dog_cat.jpeg"), is_vit),
        preprocess_image(Image.open("images/hedgehog.jpg"), is_vit),
    ]
)
```
Calculate contrastive relevance using absLRP and visualize:
```python
relevancy_method = AbsLRPRelevancyMethod(model, device)
relevance = relevancy_method.relevancy(x)
visualize_batch(x, relevance, is_vit)
```
<center>

![Usage absLRP example output](images/example_image.png)

</center>

## 📊 Global Evaluation Metric

A new evaluation method, Global Attribution Evaluation (GAE), which offers a novel perspective on evaluating faithfulness and robustness of an attribution method by utilizing gradient-based masking, while combining those results with a localization method to achieve a comprehensive evaluation of explanation quality in a single score.

![Alt text](images/image-4.png)
*Figure 3. Top and bottom 5 scoring images on GAE metric out of a randomly sampled 1024 images - absLRP VGG ImageNet*

### 🔬 Usage

Import the required libraries
```python
from abslrp_gae.gae.gae import GlobalEvaluationMetric
```
Define a dictionary of relevancy methods:
```python
relevancy_methods = {
    "abslrp": relevancy_method,
}
```
Run the metric
```python
metric = GlobalEvaluationMetric()
metric.run(
    relevancy_methods=relevancy_methods,
    model=base_model, # original model
    dataset=dataset,
    batch_size=16,
    )
```
Plot the results
```python
metric.plot()
```